import hashlib
import random
import time

from django.core.cache import cache
from django.shortcuts import render, redirect
from app.models import wheel,User

def home(request):
    wheels = wheel.objects.all()

    token = request.session.get('token')
    userid = cache.get(token)
    user = None
    if token:
        user = User.objects.get(pk=userid)

    response_dir = {
        'wheels': wheels,
        'user':user
    }

    return render(request,'home/index.html',context=response_dir)


def cart(request):
    return render(request,'cart/cart.html')


def goods_des(request):
    return render(request,'goods_des/goods_des.html')


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()

def generate_token():
    temp = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(temp.encode('utf-8'))
    return md5.hexdigest()

def login(request):
    if request.method == 'GET':
        return render(request, 'login/login.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        users = User.objects.filter(email=email)
        if users.exists():  # 存在
            user = users.first()

            if user.password == generate_password(password):  # 验证通过
                # 更新token
                token = generate_token()

                # 状态保持
                cache.set(token, user.id, 60 * 60 * 24 * 3)

                # 传递客户端
                request.session['token'] = token

                return redirect('mxw:home')
            else:  # 密码错误
                return render(request, 'login/login.html', context={'ps_err': '密码错误'})
        else:  # 不存在
            return render(request, 'login/login.html', context={'user_err': '用户不存在'})

def loginout(request):
    request.session.flush()

    return redirect('mxw:home')

def register(request):
    if request.method == 'GET':
        return render(request, 'register/register.html')
    elif request.method == 'POST':
        # 获取数据
        email = request.POST.get('email')
        name = request.POST.get('name')
        password = generate_password(request.POST.get('password'))


        # 存入数据库
        user = User()
        user.email = email
        user.password = password
        user.name = name
        user.save()

        # 状态保持
        token = generate_token()
        # key-value  >>  token:userid
        cache.set(token, user.id, 60*60*24*3)

        request.session['token'] = token

        return redirect('mxw:home')

