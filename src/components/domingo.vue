<!-- domingo.vue -->
<template>
	<p>{{display}}</p>
</template>
<script>
import moment from 'moment'

moment.locale('pt-br')
	export default {
	name: 'domingo',
	props: ['addWeeks'],
	computed: {
		display() {
			return moment(this.initDate).add(this.addWeeks, 'week').format('L')
		},
        initDate(){
        var day
           if (moment(this.$parent.monthpick, 'YYYY-MM').startOf('week').month() !== moment(this.$parent.monthpick, 'YYYY-MM').month())
                {
            day = moment(this.$parent.monthpick, 'YYYY-MM').startOf('week').add(1, 'w').toDate()
                } else {
            day = moment(this.$parent.monthpick, 'YYYY-MM').startOf('week').toDate()
                }
           return day
        },
		W: function()
		{
			return Number(moment(this.display,"DD/MM/YYYY").format('W'))
		},
	},
};
</script>
