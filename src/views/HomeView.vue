<template>
	<div class="home">
		<h1 class="text-xl font-semibold">Dropdown</h1>

		<div class="py-5 flex">
			<div class="px-2">
				<DropdownUi text="Menu 1">
					<DropdownItemUi href="http://www.google.com">
						Item 1
					</DropdownItemUi>
					<DropdownItemUi :to="{ name: 'about' }">
						Item 2
					</DropdownItemUi>
					<DropdownItemUi href="http://www.google.com" :to="{ name: 'about' }">
						Item 3
					</DropdownItemUi>
					<DropdownSeparatorUi />
					<DropdownItemUi @dropdownItemClick="onItem4Click">
						Item 4
					</DropdownItemUi>
					<DropdownItemUi>
						Item 5
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
	components: { DropdownUi, DropdownItemUi, DropdownSeparatorUi },

	methods: {
		onItem4Click(evt) {
			console.log(evt);
		}
	}
}
</script>
