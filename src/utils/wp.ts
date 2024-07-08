export type WPParams = {
	query: string;
	variables?: object;
}
export async function wpquery({ query, variables = {} }: WPParams) {
	const response = await fetch(import.meta.env.WP_GRAPHQL, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	if (!response.ok) {
		console.error(response);
		return {}
	}

	const { data } = await response.json();
	return data;
}
