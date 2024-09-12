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

		async fnGetListAnnounce(page: number = 1, limit: number = 10) {
			let query = `
				query {
					announce (page: ${page}, limit: ${limit}, sort: "-date_published") {
						short_content
					}
					announce_aggregated {
						count {
							slug
						}
					}
				}
			`;

			console.log(query);

			return await httpRequest.post(``, { query });
		},
	},
});
