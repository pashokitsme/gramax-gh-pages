// service-worker.js
self.addEventListener("install", (event) => {
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(clients.claim());
	console.log("Service Worker активирован");
});

self.addEventListener("fetch", (event) => {
	// Перехватываем только запросы к нашему домену
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			fetch(event.request)
				.then((response) => {
					// Создаем новый ответ с добавленными заголовками
					const newHeaders = new Headers(response.headers);
					newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
					newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

					return new Response(response.body, {
						status: response.status,
						statusText: response.statusText,
						headers: newHeaders,
					});
				})
				.catch((error) => {
					console.error("Ошибка в Service Worker:", error);
					return fetch(event.request);
				}),
		);
	} else {
		// Для внешних запросов просто возвращаем оригинальный ответ
		event.respondWith(fetch(event.request));
	}
});

console.log("Service Worker загружен");
