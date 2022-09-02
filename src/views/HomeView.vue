<template>
	<div class="home">
		<h1 class="text-xl font-semibold">Dropdown</h1>

		<div class="py-5 flex">
			<DropdownUi opened="true">
				<template v-slot:dropdownButtonContent>
					Dropdown
				</template>
				<template v-slot:dropdownContent>
					<DropdownItem href="http://www.google.com" text="Opa, texto!"
						target="_blank" title="Open this link">
						<template v-slot:dropdownItemContent>
							OPASO
						</template>
					</DropdownItem>

					<DropdownItem href="http://www.google.com" text="Opa, texto!"
						target="_blank" title="Open this link">
						<template v-slot:dropdownItemContent>
							OPASO
						</template>
					</DropdownItem>

					<DropdownSeparatorUi></DropdownSeparatorUi>
				</template>
			</DropdownUi>
		</div>
	</div>
</template>

<script>
import DropdownUi from '@/components/Ui/Dropdown/DropdownUi.vue';
import DropdownItem from '@/components/Ui/Dropdown/DropdownItem.vue';
import DropdownSeparatorUi from '@/components/Ui/Dropdown/DropdownSeparatorUi.vue';
export default {
	name: 'HomeView',
	components: { DropdownUi, DropdownItem, DropdownSeparatorUi }
}
</script>
