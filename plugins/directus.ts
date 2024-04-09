import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

export default defineNuxtPlugin(() => {
    const directus = createDirectus(useRuntimeConfig().public.directusApiBaseUrl).with(rest());
	return {
		provide: { directus, readItem, readItems },
	};
});