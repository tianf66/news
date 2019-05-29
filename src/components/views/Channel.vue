<template>
	<div>
		<p>123</p>
		<p>{{index}}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			//
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index
        })
	}
}
</script>