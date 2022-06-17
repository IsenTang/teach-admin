// 接口：
// 注册接口：
regist = {
    params: {
        username: '用户名',
        password: '密码',
        school: '学校',
        nickname: '昵称',
        age: '年龄'
    },
    response: {
        success: 'boolean',
        msg: success ? '注册成功' : '失败原因'
    }
}


// 登录接口
login = {
    params: {
        username: '用户名',
        password: '密码'
    },
    response: {
        success: 'boolean：成功或失败',
        msg: success ? '登录成功' : '失败原因'
    }
}

// 修改密码
changePassword = {
    params: {
        oldPassword: '原密码',
        newPassword: '新密码'
    },
    response: {
        success: 'boolean：成功或失败',
        msg: success ? '修改成功' : '失败原因'
    }
}

// 获取个人信息
userinfo = {
    params: {
        id: '用户id'
    },
    response: {
        username: '',
        school: '学校',
        nickname: '昵称',
        age: '年龄',
        other: '其他'
    }
}

// 积分商品列表
shopList = {
    params: {},
    response: [
        {'name': '商品名称', id: '商品id', price: '兑换所需积分', other: '其他'}
    ]
}

// 兑换商品
exchange = {
    params: {
        id: '商品id'
    },
    response: {
        success: 'boolean：成功或失败',
        msg: success ? '恭喜你兑换成功' : '您的积分不够了'
    }
}

// 兑换记录
exchangeRecord = {
    params: {
        id: '用户id'
    },
    response: {
        count: '兑换总次数',
        list: [
            {'name': '商品名称', time: '兑换时间', other: '其他'}
        ]
    }
}

// 退出登录
quit = {
    params: {
        id: '用户id'
    },
    response: {
        success: 'boolean',
        msg: success? '退出成功' : '失败'
    }
}