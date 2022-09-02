<template>
	<div class="home">
		<h1 class="text-xl font-semibold">Dropdown</h1>

		<div class="py-5 flex">
			<div class="px-2">
				<DropdownUi />
			</div>
		</div>
	</div>
</template>

<script>
import DropdownUi from '@/components/Ui/Dropdown/DropdownUi.vue';

export default {
	name: 'HomeView',
	components: { DropdownUi }
}
</script>
