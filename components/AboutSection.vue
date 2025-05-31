<template>
	<main>
		<h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
			About Me
		</h2>
		<div class="gap-6 md:gap-12 grid md:grid-cols-3">
			<div class="col-span-2">
				<p class="mb-4 text-muted-foreground text-justify">
					As a Senior Software Developer, I'm driven by the creation of intuitive, high-performance Android
					and web applications. My 10+ years in software development include 7 years specializing in Android,
					complemented by a solid 3-year background in web technologies.
				</p>
				<p class="mb-4 text-muted-foreground text-justify">
					My journey began with ASP.NET and Angular, before I transitioned to Android, where I've built
					solutions for companies like trivago and freenow, impacting millions of users. Lately,
					I've been expanding my horizons into the modern web with Vue, Nuxt.js, and Tailwind CSS – even using
					them to build this very CV!
				</p>
				<p class="text-muted-foreground text-justify">
					My passion for development goes beyond the frontend, encompassing Compose Multiplatform for
					mobile experiences, Google Cloud Functions (Node.js) for efficient APIs, and MongoDB for data
					solutions. A particular highlight lately has been exploring and integrating the Gemini API for
					conversational AI and advanced text generation. I genuinely enjoy the challenge of complex problems
					and am committed to continuous learning in this ever-evolving tech landscape.
				</p>
			</div>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold text-lg">
						Location
					</h3>
					<span class="text-muted-foreground">
						Düsseldorf, Germany
					</span>
				</div>
				<div>
					<h3 class="font-bold text-lg">
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
					<h3 class="font-bold text-lg">
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
