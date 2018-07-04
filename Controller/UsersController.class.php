<?php 

	class UsersController extends Controller
	{	
		public function index()
		{
			$users = new Model('users');
			$res = $users->select();
			$this->assign('res', $res);
			$this->display("Users/index.html");
		}
		public function add()
		{
			$this->display("Users/add.html");
		}

		public function insert()
		{
			$_POST['hobby'] = implode(",", $_POST['hobby']);
			$users = new Model('users');
			$res = $users->add($_POST);
			if($res){
				$this->success('添加成功！', './index.php?c=users&a=index', 5);
			}else{
				$this->error('添加失败！', './index.php?c=users&a=add', 5);
			}
		}

		//执行用户删除的方法
		public function delete()
		{
			$id = $_GET['id'];
			$users = new Model('users');
			$res = $users->del($id);
			if($res){
				$this->success('删除成功！', './index.php?c=users&a=index', 5);
			}else{
				$this->error('删除失败！', './index.php?c=users&a=index', 5);
			}
		}

		public function edit()
		{
			$users = new Model('users');
			$res = $users->find($_GET['id']);
			$this->assign('res', $res);
			$this->display("Users/edit.html");
		}

		public function update()
		{

			$id=$_GET["id"];
			$_POST["hobby"]=implode(",", $_POST["hobby"]);
			$users=new Model("users");
			$_POST["id"]=$id;
			$res=$user->save($_POST);
				if($res){
					$this->success("恭喜修改成功",'./index.php?c=users&a=index',5);
				}else{
					$this->success("抱歉修失败",'./index.php?c=users&a=index',5);
				}
		}

	
	}

 ?>