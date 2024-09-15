import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getYearsFrom2000ToCurrent() {
	const startYear = 2000;
	const currentYear = new Date().getFullYear();
	const years = [];

	for (let year = startYear; year <= currentYear; year++) {
		years.push(year);
	}

	return years;
}
