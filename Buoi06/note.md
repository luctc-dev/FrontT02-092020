1. Thông thường sẽ có nhánh mặc định (master)
2. Thông thường là chỉ có 1 người có quyền vào nhánh master (Trả tiền)

Mỗi bạn sẽ làm một nhánh khác nhau
Khi làm xong một chức năng nào đó nhánh A
Team Lead -> review code nhánh A 
          -> Ok code ổn -> Merge vào master


1. git checkout -b ten-nhanh

  ten-nhanh muốn đặt sao cũng được (Không có khoảng trắng, thông thường viết không in hoa)
  Khi đi làm thường sẽ có quy tắt đặt tên chung cho cả team 

  Ví dụ: Những nhánh mà liên quan tơi 1 chức năng nào đó  (feature)
    feat/ten-chuc-nang 

    feat/login 
    feat/dashboard

    feat/luc-tc

    Những nhánh nào dùng để fix lỗi cho feature có sẵn 
    fix/hjksfhskhhfjkgh 

2. Sau khi tách nhánh code hiện tại ở bên nhánh mới là code tại thời điểm tách từ master
3. Thay đổi code bất kì sau đó push lên theo cách thông thường 
  git status
  git add .
  git status
  git commit -m "mo ta ...."
  git push origin -u feat/luc-tc 
4. Sau khi đã có nhánh trên server của git rồi thì không cần origin -u nữa