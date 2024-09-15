import { defineStore } from "pinia";
import httpRequest from "@/lib/http-request";

export const useAnnounceStore = defineStore({
	id: "announce",
	state: () => ({}),
	actions: {
		async fnGetCateAndTags() {
			let query = `
				query {
					a_tags {
						slug
						title
						raw
					}
					a_categories {
						slug
						title
						raw
					}
				}
			`;

			return await httpRequest.post(``, { query });
		},

		async fnGetListAnnounce(
			page: number = 1,
			limit: number = 12,
			categorySlug: string | null = null,
			tagSlug: string | null = null,
			date: string | null = null,
			keyword: string | null = null
		) {
			let filterConditions = [];

			if (categorySlug) {
				filterConditions.push(`{ categories: { category: { slug: { _eq: "${categorySlug}" } } } }`);
			}

			if (tagSlug) {
				filterConditions.push(`{ tags: { tag: { slug: { _eq: "${tagSlug}" } } } }`);
			}

			if (date) {
				filterConditions.push(`{ date_published: { _eq: "${date}" } }`);
			}

			if (keyword) {
				filterConditions.push(`{ title: { _contains: "${keyword}" } }`);
			}

			let filterString = filterConditions.length ? `filter: { _and: [${filterConditions.join(", ")}] }` : "";

			let query = `
				query {
					announce (page: ${page}, limit: ${limit}, sort: "-date_published" ${filterString ? `, ${filterString}` : ""}) {
						short_content
					}
					announce_aggregated ${filterString ? `(${filterString})` : ""} {
						count {
							slug
						}
					}
				}
			`;

			return await httpRequest.post(``, { query });
		},

		async fnGetAnnounceDetail(slug: string) {
			let query = `
				query {
					announce_by_id(id: "${slug}") {
						raw_content
					}
				}
			`;

			return await httpRequest.post(``, { query });
		},
	},
});
