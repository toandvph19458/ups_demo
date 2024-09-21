import { defineStore } from "pinia";
import httpRequest from "@/lib/http-request";

export const useSupport = defineStore({
	id: "support",
	state: () => ({}),
	actions: {
		async fnMutation(data: any) {
			let query = `
				mutation {
					create_contact_tickets_item (data: {
						email: "${data?.email}",
						fullname: "${data?.fullname}",
						phone_number: "${data?.phone}",
						message: "${data?.content}"
					})
				}
			`;

			return await httpRequest.post(``, { query });
		},
	},
});
