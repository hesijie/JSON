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

    for($j=0;$j<$subCategoryLength;$j++)
    {
        $data = array(
            "subCategoryId" => $subCategory[$j]['id'],
            "subCategoryName" => $subCategory[$j]['name'],
            "subCategoryIcon" => $subCategory[$j]['pic']
        );

        $subCategoryData[$j] = $data;
    }

    $data = array(
        "CategoryId" => $category[$i]['id'],
        "CategoryName" => $category[$i]['name'],
        "subCategory" =>$subCategoryData
    );


    $result[$i] = $data;

}

echo json_encode($result);
?>