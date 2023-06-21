import execjs
import os
import sys

def encrypt_data(js_file_path, js_function_name, input_file_path, output_file_name):
    try:
        # 检查JS文件是否存在
        if not os.path.isfile(js_file_path):
            raise FileNotFoundError(f"JS文件不存在: {js_file_path}")

        # 检查输入文件是否存在
        if not os.path.isfile(input_file_path):
            raise FileNotFoundError(f"输入文件不存在: {input_file_path}")

        # 读取输入文件
        with open(input_file_path, 'r') as file:
            lines = file.readlines()

        # 加载JavaScript代码
        with open(js_file_path, 'r') as file:
            js_code = file.read()

        # 创建JavaScript运行环境
        ctx = execjs.compile(js_code)

        # 创建输出文件
        output_file_path = os.path.abspath(output_file_name)
        with open(output_file_path, 'w') as file:
            # 遍历每一行进行加密操作并写入输出文件
            for line in lines:
                encrypted_line = ctx.call(js_function_name, line.strip())
                file.write(encrypted_line + '\n')

        return output_file_path
    except FileNotFoundError as e:
        raise 
    except Exception as e:
        raise Exception(str(e))

# 获取命令行参数
if len(sys.argv) != 5 or sys.argv[1] in ['-h', '--help']:
    print("Usage: python encrypt_dic.py <js_file_path> <js_function_name> <input_file_path> <output_file_name>")
    print("Options:")
    print("-h, --help                    显示帮助信息     ")
    print("<js_file_path>                js文件路径       ")
    print("<js_function_name>            js文件中调用的方法")
    print("<input_file_path>             字典路径         ")
    print("<output_file_name>            加密后字典       ")
    sys.exit(1)

js_file_path = sys.argv[1]
js_function_name = sys.argv[2]
input_file_path = sys.argv[3]
output_file_name = sys.argv[4]

try:
    output_path = encrypt_data(js_file_path, js_function_name, input_file_path, output_file_name)
    print('加密成功，加密结果保存在:', output_path)
except Exception as e:
    print('加密失败:', str(e))
