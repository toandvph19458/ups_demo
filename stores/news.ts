import { defineStore } from "pinia";
import httpRequest from "@/lib/http-request";

export const useNewsStore = defineStore({
	id: "news",
	state: () => ({}),
	actions: {
		async fnGetCateAndTags() {
			let query = `
				query {
					p_tags {
						slug
						title
						raw
					}
					p_categories {
						slug
						title
						raw
					}
				}
			`;

			return await httpRequest.post(``, { query });
		},

		async fnGetListNews(page: number = 1, limit: number = 8) {
			let query = `
				query {
					posts (page: ${page}, limit: ${limit}, sort: "-date_published") {
						short_content
					}
					posts_aggregated {
						count {
							slug
						}
					}
				}
			`;

			return await httpRequest.post(``, { query });
		},
	},
});
