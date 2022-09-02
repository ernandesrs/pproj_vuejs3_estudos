<template>
	<div class="home">
		<h1 class="text-xl font-semibold">Dropdown</h1>

		<div class="py-5 flex">
			<div class="px-2">
				<DropdownUi text="Menu">
					<DropdownItemUi>
						Item 1
					</DropdownItemUi>
					<DropdownItemUi>
						Item 2
					</DropdownItemUi>
					<DropdownSeparatorUi />
					<DropdownItemUi>
						Item 3
					</DropdownItemUi>
				</DropdownUi>
			</div>
		</div>
	</div>
</template>

<script>
import DropdownUi from '@/components/Ui/Dropdown/DropdownUi.vue';
import DropdownItemUi from '@/components/Ui/Dropdown/DropdownItemUi.vue';
import DropdownSeparatorUi from '@/components/Ui/Dropdown/DropdownSeparatorUi.vue';

export default {
	name: 'HomeView',
	components: { DropdownUi, DropdownItemUi, DropdownSeparatorUi }
}
</script>
