<template>
	<div class="home">
		<h1 class="text-xl font-semibold">Dropdown</h1>

		<div class="py-5 flex">
			<DropdownUi>
				<template v-slot:dropdownButtonContent>
					Dropdown text
				</template>
				<template v-slot:dropdownContent>
					Opa
				</template>
			</DropdownUi>
		</div>
	</div>
</template>

<script>
import DropdownUi from '@/components/Ui/DropdownUi.vue';
export default {
	name: 'HomeView',
	components: { DropdownUi }
}
</script>
