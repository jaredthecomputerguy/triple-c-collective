// @ts-expect-error Experimental package
import { GoogleMapsEmbed } from '@next/third-parties/google';

export const GoogleMapEmbed = () => {
    return (
        <GoogleMapsEmbed
            apiKey={process.env.GOOGLE_MAPS_API_KEY!}
            mode='place'
            allowfullscreen
            style={`height: 500px; width: 100%`}
            loading='eager'
            q='Triple C Collective, 14196 Lakeshore Ave. Clearlake CA 95422'
            title='Google Maps'
        />
    );
};
