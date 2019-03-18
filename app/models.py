from django.db import models

class wheel(models.Model):
    img = models.CharField(max_length=200)
    name = models.CharField(max_length=200)

    class Meta:
        db_table = 'mxw_wheel'

class User(models.Model):
    email = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=256)
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=40, default='mxw.png')

    class Meta:
         db_table = 'mxw_user'

class Goods(models.Model):
    # 商品ID
    productid = models.CharField(max_length=10)
    # 商品图片
    productimg = models.CharField(max_length=100)
    # 商品名称
    productname = models.CharField(max_length=100)
    # 商品长名字
    productlongname = models.CharField(max_length=256)
    # 商品价格
    price = models.DecimalField(max_digits=6, decimal_places=2)
    # 库存
    storenums = models.IntegerField()
    # 销售
    productnum = models.IntegerField()

    class Meta:
        db_table = 'mxw_goods'