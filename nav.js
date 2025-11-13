// navigation.js - 工业革命：新纪元网站导航栏功能

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) {
        console.warn('导航栏元素未找到，请确保HTML中包含正确的ID');
        return;
    }
    
    // 切换移动端菜单
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // 点击导航链接后关闭移动端菜单
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // 点击页面其他区域关闭移动端菜单
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);
        
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // 窗口大小改变时重置菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});