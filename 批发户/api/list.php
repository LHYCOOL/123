<?php
    $lists = [
        [
            "id"=>15,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
            
        ],
        [
            "id"=>1,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,       
        ],
        [
            "id"=>2,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>3,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>4,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>5,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>6,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>7,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>8,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>9,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>10,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],       
        [
            "id"=>11,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>12,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>13,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
        [
            "id"=>14,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],        
        [
            "id"=>16,
            "title"=>"GUMAYA S925纯银复古风耳钉",
            "src"=>"https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg",
            "madeIn"=>"深圳产地：LKN",
            "price"=>49.80,
        ],
    ];
    
    $count = count($lists);  
    $show  = 15;
    $allPage = ceil($count / $show);
    $nowPage = @$_REQUEST["nowPage"]?$_REQUEST["nowPage"]:1;
    $offset = ($nowPage-1) * 15;

    $length = $offset+15;
    if($length > $count){
        $length = $count;
    }
    $resLists = [];
    if($_REQUEST["sort"]){
        foreach ($lists as $key => $v)
        {
            $sales[$key]  = $v['sales'];
        }
        array_multisort($sales, SORT_DESC, $lists);
    }
    for($i=$offset;$i<$length;$i++){
        $resLists[$i] = $lists[$i];
    }
    $res = ["allPage"=>$allPage,"lists"=>$resLists];
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

