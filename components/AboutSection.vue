<template>
	<main>
		<h2 class="mb-8 tracking-tighter text-2xl font-bold md:text-3xl">
			About Me
		</h2>
		<div class="grid gap-6 md:grid-cols-3 md:gap-12">
			<div class="col-span-2">
				<p class="mb-4 text-muted-foreground text-justify">
					As a Senior Software Engineer, I'm driven by the creation of intuitive, high-performance Android
					and web applications. My 10+ years in software development include 7 years specializing in Android,
					complemented by a solid 3-year background in web technologies.
				</p>
				<p class="mb-4 text-muted-foreground text-justify">
					My journey began with ASP.NET and Angular, before I transitioned to Android, where I've built
					solutions for companies like trivago and freenow in Germany, impacting millions of users. Lately,
					I've been expanding my horizons into the modern web with Vue, Nuxt.js, and Tailwind CSS – even using
					them to build this very CV!
				</p>
				<p class="text-muted-foreground text-justify">
					Beyond frontend, I'm deeply involved with Compose Multiplatform for mobile, Google Cloud Functions
					(Node.js) for scalable APIs, and MongoDB for data management. A recent highlight has been exploring
					the capabilities of Gemini – specifically, integrating the Gemini API with the Vercel AI SDK to
					power the conversational AI in my property search app, Seekey. I enjoy the challenge of complex
					problems and am committed to continuous learning in this ever-evolving tech landscape.
				</p>
			</div>
			<div class="space-y-4">
				<div>
					<h3 class="text-lg font-bold">
						Location
					</h3>
					<span class="text-muted-foreground">
						Düsseldorf, Germany
					</span>
				</div>
				<div>
					<h3 class="text-lg font-bold">
						Email
					</h3>
					<ULink
						to="mailto:karlo.miguel.p.yu@gmail.com"
						variant="link"
					>
						karlo.miguel.p.yu@gmail.com
					</ULink>
				</div>
				<div>
					<h3 class="text-lg font-bold">
						Work Availability
					</h3>
					<span class="text-muted-foreground">
						Full-time, Remote
					</span>
				</div>
			</div>
		</div>
	</main>
</template>
