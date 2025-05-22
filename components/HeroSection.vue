<template>
	<main>
		<div class="flex flex-col-reverse md:flex-row w-full md:gap-12">
			<div class="flex flex-1 flex-col justify-center space-y-4">
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
						to="https://github.com/yukarlo"
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
						to="https://www.linkedin.com/in/karlomiguelpyu/"
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
					class="relative overflow-hidden rounded-full border-4 border-border h-50 w-50 md:h-70 md:w-70"
				>
					<NuxtImg
						src="https://media.licdn.com/dms/image/v2/C4D03AQHOVGysUwsW6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617795901794?e=1753315200&v=beta&t=YFbGk2ZQURGNqjLxBAI9g6Rp8urCWgCV8KzDm8IeMyc"
						alt="Profile"
						class="object-cover absolute inset-0 w-full h-full"
					/>
				</div>
			</div>
		</div>
	</main>
</template>
