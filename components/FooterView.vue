<template>
	<main>
		<footer class="py-6 md:py-0 border-t">
			<div class="flex md:flex-row flex-col justify-between items-center gap-4 mx-auto xs:px-[var(--px-fluid-sm)] sm:px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md) max-w-[1450px] md:h-24">
				<p class="text-muted-foreground text-sm md:text-left text-center">
					© {{ new Date().getFullYear() }} Karlo Miguel Yu. All rights reserved.
				</p>
				<div class="flex gap-4">
					<UButton
						to="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						variant="link"
						color="neutral"
						class="rounded-full"
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
						variant="link"
						color="neutral"
						class="rounded-full"
					>
						<UIcon
							size="24"
							name="mdi:linkedin"
						/>
						<span class="sr-only">LinkedIn</span>
					</UButton>
					<UButton
						to="mailto:karlo.miguel.p.yu@gmail.com"
						variant="link"
						color="neutral"
						class="rounded-full"
					>
						<UIcon
							size="24"
							name="material-symbols:alternate-email"
						/>
						<span class="sr-only">Email</span>
					</UButton>
				</div>
			</div>
		</footer>
	</main>
</template>
