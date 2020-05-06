# 371. 两整数之和

## 题目链接

https://leetcode-cn.com/problems/sum-of-two-integers/

## 思路

无进位的加法其实就是异或操作（`a ^ b`），获取进位则 `(a & b) << 1`，一直循环直到进位为 0

另外减法怎么办，补码可以将减法转换为加法

参考：https://blog.csdn.net/qq_35513792/article/details/85044216
