<template>
    <div>
        <el-dropdown class="lang-selector" @command="handleCommand">
            <template class="el-dropdown-link">
                <span id="language" style="padding-right: 10px;font-size: 17px;">中文</span>
            </template>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh_cn:中文">中文</el-dropdown-item>
              <el-dropdown-item command="en_us:English">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    methods: {
        handleCommand(command) {
            let arr = command.split(':')
            let lang = arr[0] === ''? 'zh_cn' : arr[0]
            let label = arr[1]
            document.getElementById('language').innerHTML = label
            this.$i18n.locale = lang
        }
    }
}
</script>

<style scoped lang="scss">
.lang-selector {
    margin-left: -50px;
}
.el-dropdown {
    color: white;
}
</style>