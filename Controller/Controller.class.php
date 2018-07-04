<?php  
	
	class Controller extends Smarty//调用Smarty的方法
	{
		public function __construct(){
			parent::__construct();
			$this->template_dir = "./View";
			$this->compile_dir = "./View_c";
		}
		public function success($info, $link, $seconds)
		{
			$this->assign('info', $info);
			$this->assign('link', $link);
			$this->assign('seconds', $seconds);
			$this->display("./success.html");
		}

		public function error($info, $link, $seconds)
		{
			$this->assign('info', $info);
			$this->assign('link', $link);
			$this->assign('seconds', $seconds);
			$this->display("./error.html");
		}
		
	}







?>