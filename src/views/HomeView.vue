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
			<div class="px-2">
				<DropdownUi text="Menu 2" no-icon>
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
			<div class="px-2">
				<DropdownUi text="Menu 3" rounded>
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
			<div class="px-2">
				<DropdownUi text="Menu 4" naked>
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

	<div class="home">

		<h1 class="text-xl font-semibold">Cards</h1>

		<div class="py-5">
			<CardGroupUi basis="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
				<template v-slot:cards>
					<CardItemUi>
						<template v-slot:cardContent>
							OPA
						</template>
					</CardItemUi>
					<CardItemUi>
						<template v-slot:cardContent>
							OPA
						</template>
					</CardItemUi>
					<CardItemUi>
						<template v-slot:cardContent>
							OPA
						</template>
					</CardItemUi>
				</template>
			</CardGroupUi>
		</div>
	</div>
</template>

<script>

import DropdownUi from '@/components/Ui/Dropdown/DropdownUi.vue';
import DropdownItemUi from '@/components/Ui/Dropdown/DropdownItemUi.vue';
import DropdownSeparatorUi from '@/components/Ui/Dropdown/DropdownSeparatorUi.vue';
import CardItemUi from '@/components/Ui/Card/CardItemUi.vue';
import CardGroupUi from '@/components/Ui/Card/CardGroupUi.vue';

export default {
	name: 'HomeView',
	components: { DropdownUi, DropdownItemUi, DropdownSeparatorUi, CardItemUi, CardGroupUi },

	methods: {
		onItem4Click(evt) {
			console.log(evt);
		}
	}
}

</script>
