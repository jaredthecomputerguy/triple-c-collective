// @ts-expect-error Experimental
import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function ContactPage() {
    // TODO: Implement this
    return (
        <section>
            Contact Page
            <GoogleMapsEmbed
                apiKey={process.env.GOOGLE_MAPS_API_KEY!}
                mode='place'
                allowfullscreen
                style='height: 500px; width: 500px'
                loading='eager'
                q='Triple C Collective, 14196 Lakeshore Ave. Clearlake CA 95422'
            />
        </section>
    );
}
