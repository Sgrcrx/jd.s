<template>

	<div class="GoodsMore">

		<a href="#" class="goods" v-for="(item,index) in mores">
			<div class="images">
				<img :src="item.images" />
			</div>
			<div class="goods-item">
				<p v-text="item.title"></p>
				<span id="money">￥<span class="money" v-text="item.money"></span>.00</span>
				<span class="talks" v-text="item.talks"></span>
				<span class="ads" v-text="item.ads"></span>
			</div>
		</a>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				mores: [{
					images: require('../../public/img/ThinkCentre.jpg'),
					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
					money: '3499',
					talks: '200+条评价&nbsp;好评率99%',
					ads: '广告>'
				}, {
					images: require('../../public/img/ThinkPad.jpg'),
					title: ' 联想ThinkPad&nbsp;翼480（0VCD）英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U&nbsp;8G&nbsp;128GSSD+500G&nbsp;2G独显）',
					money: '4999',
					talks: '10万+条评价&nbsp;好评率99%',
					ads: '广告>'
				}, {
					images: require('../../public/img/ThinkCentre.jpg'),
					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
					money: '3499',
					talks: '200+条评价&nbsp;好评率99%',
					ads: '广告>'
				}, {
					images: require('../../public/img/ThinkCentre.jpg'),
					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
					money: '3499',
					talks: '200+条评价&nbsp;好评率99%',
					ads: '广告>'
				}, {
					images: require('../../public/img/ThinkCentre.jpg'),
					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
					money: '3499',
					talks: '200+条评价&nbsp;好评率99%',
					ads: '广告>'
				}, {
					images: require('../../public/img/ThinkCentre.jpg'),
					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
					money: '3499',
					talks: '200+条评价&nbsp;好评率99%',
					ads: '广告>'
				}, ]
			}
		}
	}
</script>

<style scoped="scoped">
	
	.GoodsMore {
		border-top: 1px solid #eee;
		margin-top: 0.2em;
		box-sizing: border-box;
	}
	
	.goods {
		text-decoration: none;
		color: #333;
		font-size: 16px;
		font-weight: normal;
		margin-top: 0.4rem;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	
	.images {
		width: 120px;
		height: 120px;
		box-sizing: border-box;
	}
	
	.images img {
		width: 120px;
		height: 120px;
		box-sizing: border-box;
		padding: 0.2rem;
	}
	
	.goods-item {
		flex: 1;
		box-sizing: border-box;
	}
	
	.goods-item p {
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		box-sizing: border-box;
	}
	
	.goods-item span {
		text-align: left;
		display: block;
		font-size: 12px;
		color: #666;
	}
	
	#money {
		color: #e93b3d;
	}
	
	.goods-item span.money {
		display: inline-block;
		font-size: 14px;
		color: #e93b3d;
		font-weight: 400;
	}
	
	.goods-item span.talks {
		
	}
	
	.goods-item span.ads {
		text-align: right;
	}
</style>