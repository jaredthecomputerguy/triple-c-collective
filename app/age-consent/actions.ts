'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function ageConsentAction(formData: FormData) {
    const rememberMe = formData.get('rememberMe');
    const redirect_uri = formData.get('redirectUri') as string;

    const expiresIn = rememberMe ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 24;

    cookies().set('age-consent', 'true', { expires: Date.now() + expiresIn, sameSite: 'strict' });

    redirect(redirect_uri);
}
