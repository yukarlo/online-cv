<template>
	<main>
		<section class="py-12 md:py-16">
			<div class="grid gap-8 md:grid-cols-2 md:gap-12">
				<div class="flex flex-col justify-center space-y-4">
					<div>
						<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Karlo Miguel Yu
						</h1>
						<h2 class="text-xl font-medium text-muted-foreground sm:text-2xl">
							Senior Software Engineer
						</h2>
					</div>
					<p class="max-w-[600px] text-muted-foreground md:text-xl">
						Passionate software engineer with 5+ years of experience building web applications and leading
						development teams.
					</p>
					<div class="flex gap-2">
						<UButton
							to="/contact"
							label="Contact Me"
							color="secondary"
						/>
						<UButton
							to="/projects"
							variant="outline"
							color="neutral"
							label="View Projects"
						/>
					</div>
					<div class="flex gap-2 pt-2">
						<UButton
							to="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="neutral"
							class="rounded-full p-2"
						>
							<UIcon
								size="24"
								name="mdi:github"
							/>
							<span class="sr-only">GitHub</span>
						</UButton>
						<UButton
							to="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							color="neutral"
							class="rounded-full p-2"
						>
							<UIcon
								size="24"
								name="mdi:linkedin"
							/>
							<span class="sr-only">LinkedIn</span>
						</UButton>
						<UButton
							to="mailto:karlo.miguel.p.yu@gmail.com"
							variant="ghost"
							color="neutral"
							class="rounded-full p-2"
						>
							<UIcon
								size="24"
								name="material-symbols:alternate-email"
							/>
							<span class="sr-only">Email</span>
						</UButton>
					</div>
				</div>
				<div class="flex justify-center md:justify-end">
					<div
						class="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-border md:h-[400px] md:w-[400px]"
					>
						<NuxtImg
							src="https://media.licdn.com/dms/image/v2/C4D03AQHOVGysUwsW6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617795901794?e=1753315200&v=beta&t=YFbGk2ZQURGNqjLxBAI9g6Rp8urCWgCV8KzDm8IeMyc"
							alt="Profile"
							class="object-cover absolute inset-0 w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="pb-6 md:pb-8">
			<AboutSection />
		</section>
	</main>
</template>
