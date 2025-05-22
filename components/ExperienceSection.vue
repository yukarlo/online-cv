<script setup lang="ts">
const experience = [
	{
		title: "Senior Android Developer",
		company: "FREENOW",
		period: "Apr 2021 - Jul 2024",
		responsibilities: [
			"Contributed significantly to the multimobility flow's lifecycle, from ideation to delivery and maintenance.",
			"Owned the development of key features as a Story/Feature Owner, establishing timelines and fostering cross-platform synergy.",
			"Collaborated effectively with Project Managers to ensure timely project delivery and proactively address potential roadblocks.",
			"Proactively identified and resolved critical issues within our domain, contributing to a more robust and reliable system.",
			"Undertook an exchange program with another domain team to understand their domain and help optimize their workflows and processes.",
			"Led and facilitated a workgroup focused on discussing MVVM architecture and strategizing its implementation within our codebase.",
			"Provided mentorship to a mid-level developer, providing guidance and support to foster their growth, helping them navigate challenges.",
		],
	},
	{
		title: "Android Developer",
		company: "trivago",
		period: "Nov 2017 - Mar 2021",
		responsibilities: [
			"Implemented new features, resolved issues, and conducted thorough testing to support the development process.",
			"Fostered close collaboration within the team, engaging in discussions about system flow and potential solutions.",
			"Participated in multiple workgroups, contributing to the ideation phase of features, including initial design and implementation considerations.",
			"Collaborated within the UI system design group to establish a consistent UI/UX framework for both iOS and Android applications.",
			"Provided mentorship to a junior developer, assisting them in skill development and project understanding.",
			"Assisted in the hiring process, helping to identify and onboard new talent for the team.",
		],
	},
	{
		title: "Software Developer",
		company: "BlastAsia, Inc.",
		period: "Apr 2015 - Sep 2016",
		responsibilities: [
			"Managed development and maintenance for a wide array of products, serving a broad client base (both internal and external).",
			"Provided solutions that consistently aligned with stakeholder needs, driving project success.",
			"Took the initiative to pivot towards Android development, bolstering mobile competencies.",
		],
	},
	{
		title: "Software Developer",
		company: "MediLink Network, Inc.",
		period: "Sep 2013 - Mar 2015",
		responsibilities: [
			"As a junior developer, I actively collaborated with multiple teams to ensure client requirements and expectations were consistently met.",
		],
	},
]
</script>

<template>
	<main>
		<h2 class="mb-8 tracking-tighter text-2xl font-bold md:text-3xl">
			Work Experience
		</h2>
		<div class="space-y-8">
			<div
				v-for="(job, index) in experience"
				:key="index"
				class="rounded-lg border p-6"
			>
				<div class="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
					<div>
						<h3 class="text-xl font-bold">
							{{ job.title }}
						</h3>
						<p class="text-lg text-muted-foreground">
							{{ job.company }}
						</p>
					</div>
					<div class="text-muted-foreground">
						{{ job.period }}
					</div>
				</div>
				<ul class="ml-6 list-disc space-y-2 text-muted-foreground">
					<li
						v-for="(responsibility, i) in job.responsibilities"
						:key="i"
					>
						{{ responsibility }}
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
