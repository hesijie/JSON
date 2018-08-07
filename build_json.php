<?php

$result = array();

//(实际项目从数据库中获取,这里是假设)
$category=[];//一级目录的数据
$categoryLength=10;//一级目录的长度

$subCategory=[];//二级目录的数据
$subCategoryLength=10;//二级目录的长度


for($i=0;$i<$categoryLength;$i++)
{
    $subCategoryData=array();//存放一级目录下对应的所有二级类目数组

    for($i=0;$i<$subCategoryLength;$i++)
    {
        $subCategoryData = array(
            "subCategoryId" => $subCategory[$i]['id'],
            "subCategoryName" => $subCategory[$i]['name'],
            "subCategoryIcon" => $subCategory[$i]['pic']
        );

    }

    $data = array(
        "CategoryId" => $category[$i]['a_id'],
        "CategoryName" => $category[$i]['a_name'],
        "subCategory" =>$subCategoryData
    );


    $result[$i] = $data;

}

echo json_encode($result);
?>