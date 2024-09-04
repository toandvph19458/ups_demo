import { defineStore } from "pinia";
import httpRequest from "@/lib/http-request";

export const useInstructionStructureStore = defineStore({
	id: "instruction-structure",
	state: () => ({}),
	actions: {
		async fnGetListInstructionStructure(page: number = 1, limit: number = 10) {
			let query = `
				query {
					instruction_structure (page: 1, limit: 8) {
						slug
						title
						blurb
						documents {
							document {
								slug
								title
								blurb
							}
						}
					}
				}
			`;

			return await httpRequest.post(``, { query });
		},
	},
});
