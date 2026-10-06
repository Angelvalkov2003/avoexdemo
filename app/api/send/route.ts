import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const serviceTypeMap: Record<string, string> = {
    website: 'Website',
    ecommerce: 'E-commerce',
    software: 'Custom software',
    ai: 'AI automation',
    brand: 'Brand & marketing',
    other: 'Something else',
};

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set');
        return NextResponse.json({ message: 'Email service is not configured' }, { status: 500 });
    }

    try {
        const body = await request.json();
        const name = String(body.name ?? '').trim();
        const email = String(body.email ?? '').trim();
        const serviceType = String(body.serviceType ?? '').trim();
        const budget = String(body.budget ?? '').trim();
        const description = String(body.description ?? '').trim();
        const localeMap: Record<string, string> = {
            en: 'EN',
            bg: 'BG',
            nl: 'NL',
            de: 'DE',
            es: 'ES',
        };
        const locale = localeMap[String(body.locale ?? '')] ?? 'EN';

        if (!email || !serviceType || !description) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const serviceTypeDisplay = serviceTypeMap[serviceType] || serviceType;

        const htmlContent = `
            <h2>New inquiry from avoex.vercel.app (${locale})</h2>
            <p><strong>Name:</strong> ${escapeHtml(name || 'Not specified')}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Service:</strong> ${escapeHtml(serviceTypeDisplay)}</p>
            <p><strong>Budget:</strong> ${escapeHtml(budget || 'Not specified')}</p>
            <p><strong>Description:</strong></p>
            <p>${escapeHtml(description).replace(/\n/g, '<br>')}</p>
        `;

        const { data, error } = await resend.emails.send({
            from: 'avoex@resend.dev',
            to: 'avoex.contact@gmail.com',
            replyTo: email,
            subject: `New inquiry: ${serviceTypeDisplay}${name ? ` — ${name}` : ''}`,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', emailId: data?.id });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Use POST to send contact form data' });
}
