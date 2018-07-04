<?php 

	class IndexController
	{
		public function index()
		{
			echo '展示首页列表的方法';
		}

		//加载添加首页表单的方法
		public function add()
		{
			echo '展示添加首页的表单';
		}
		public function insert()
		{
			echo '执行首页添加的方法';
		}

		public function delete()
		{
			echo '执行首页删除的方法';
		}

		public function edit()
		{
			echo '加载修改首页表单的方法';
		}

		public function update()
		{
			echo '执行首页修改的方法';
		}
	}

 ?>