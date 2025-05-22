<template>
	<main>
		<footer class="border-t py-6 md:py-0">
			<div class="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-[1450px] mx-auto xs:px-[var(--px-fluid-sm)] sm:px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md)">
				<p class="text-center text-sm text-muted-foreground md:text-left">
					© {{ new Date().getFullYear() }} Karlo Miguel Yu. All rights reserved.
				</p>
				<div class="flex gap-4">
					<UButton
						to="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						variant="link"
						color="neutral"
						class="rounded-full "
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
						class="rounded-full "
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
						class="rounded-full "
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
