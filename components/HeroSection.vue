<template>
	<main>
		<div class="flex md:flex-row flex-col-reverse md:gap-12 w-full">
			<div class="flex flex-col flex-1 space-y-4">
				<div class="justify-items-center md:justify-items-start mt-4 md:mt-0">
					<h1 class="font-bold text-3xl sm:text-5xl xl:text-6xl/none tracking-tighter">
						Karlo Miguel Yu
					</h1>
					<h2 class="font-medium text-muted-foreground text-xl sm:text-2xl">
						Senior Software Developer
					</h2>
				</div>
				<p class="max-w-[600px] text-muted-foreground md:text-xl">
					Passionate Software Developer with 10 years of experience building and optimizing mobile and web applications, leveraging a diverse tech stack to impact a wide user base.
				</p>
				<div class="flex gap-2">
					<UButton
						to="#contact"
						label="Contact Me"
						color="secondary"
					/>
					<UButton
						to="#projects"
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
						class="p-2 rounded-full"
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
						class="p-2 rounded-full"
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
						class="p-2 rounded-full"
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
					class="relative border-4 border-border rounded-full w-40 md:w-70 h-40 md:h-70 overflow-hidden"
				>
					<NuxtImg
						src="https://media.licdn.com/dms/image/v2/C4D03AQHOVGysUwsW6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617795901794?e=1753315200&v=beta&t=YFbGk2ZQURGNqjLxBAI9g6Rp8urCWgCV8KzDm8IeMyc"
						alt="Profile"
						class="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</main>
</template>
