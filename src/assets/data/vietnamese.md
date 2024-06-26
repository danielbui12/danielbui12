XCM đã được cải tiến đáng kể chỉ trong khoảng 2020 tới nay đã có tới 3 phiên bản đã được phát hành. Phiên bản thử nghiệm đầu tiên của XCM - v0 được phát hành vào tháng 12 năm 2020, và bây giờ với phiên bản mới nhất, XCM V3, cải thiện bảo mật và khả năng tương tác, tăng cường lợi thế cạnh tranh, khẳng định vị thế của Polkadot so với các modular blockchain khác trên thị trường. Thậm trí XCM V4 đã và đang trong quá trình nghiên cứu và phát triển, hứa hẹn mang đến trải nghiệm linh hoạt trong cách sử dụng.

ℹ️ Trong bài viết này, cùng tìm hiểu tổng quan về XCM nhé.


＃ XCM là gì?

XCM (Cross-Chain Messaging) là một thành phần quan trọng của hệ sinh thái Polkadot, cho phép giao tiếp và tương tác giữa các parachain. XCM đóng vai trò như là tập hợp các quy tắc thông điệp hoặc "ngôn ngữ chung" để giao tiếp giữa các kênh khác nhau.

⚠️ Lưu ý: XCM chỉ là ngỗ ngữ lập trình, giúp định dạng các tin nhắn, không phải là giao thức chịu trách nhiệm truyền tải.


A-4 của XCM 😎: 4 nguyên tắc thiết kế cốt lõi cấp cao mà nó tuân theo
- Asynchronous (Bất đồng bộ): Người gửi gửi tin nhắn mà không cần chờ đợi để tin nhắn được xử lý.
- Absolute (Tuyệt đối): Đảm bảo rằng tin nhắn sẽ được chuyển và hiểu đúng cách.
- Asymmetric (Không đối xứng): Không có xác nhận rằng tin nhắn đã được nhận.
- Agnostic (Không phụ thuộc): Hoạt động mà không cần biết hoặc phụ thuộc vào hệ thống mà nó đang gửi đến.

＃ Phương thức truyền tải của XCM

Như đã đề cập ở trên, XCM là ngôn ngữ để định dạng các tin nhắn, nó không phải là một giao thức truyền tải. XCM dựa vào các giao thức truyền tải như HRMP, XCMP và VMP để trao đổi các thông điệp XCM từ hệ thống này sang hệ thống khác, cùng với các cầu nối bên ngoài.

Có 3 phương pháp chính để truyền tin nhắn, một trong số đó đang được phát triển:
↔️ XCMP (Cross-Consensus Message Passing)
➡️ Horizontal Relay-routed Message Passing (HRMP/XCMP-lite)
⬆️ VMP (Vertical Message Passing)


1. XCMP

⚠️ Lưu ý: XCMP hiện đang trong quá trình phát triển, và hầu hết các thông điệp hiện tại được truyền qua các kênh HRMP.

XCMP cho phép giao tiếp an toàn giữa các parachain. Nó có hai hình thức:

- Direct: Dữ liệu tin nhắn được gửi trực tiếp giữa các parachain, giúp nó có khả năng mở rộng cao và O(1) ở phía Relay-chain.
- Relayed: Dữ liệu tin nhắn được định tuyến qua Relay-chain và dựa trên VMP, dẫn đến khả năng mở rộng thấp hơn. Các parachain theo yêu cầu có thể gặp phải sự chậm trễ trong tin nhắn do hàng đợi tăng lên.

2. HRMP/XCMP-lite

Khác với VMP, là giao tiếp giữa một parachain cụ thể với Relay-chain, HRMP là giao tiếp giữa các parachain và yêu cầu sự tham gia của Relay-chain trong quá trình truyền tải tin nhắn.

(ảnh 2)

3. VMP

Vertical Messaging Passing là giao tiếp giữa Relay Chain và các parachain. Nó có thể được chia thành hai định dạng:

- **UMP (Upward Message Passing)**: Tin nhắn từ **parachain** đến **Relay Chain**.
- **DMP (Downward Message Passing)**: Tin nhắn từ **Relay Chain** đến **parachain**.

(ảnh 3)

＃ XCM Virtual Machine

Cốt lõi của XCM là XCVM (Cross-Consensus Virtual Machine). Đây giống như một máy tính đặc biệt chỉ hiểu ngôn ngữ của XCM mỗi tin nhắn tương ứng với 1 XCVM. Nó tuân theo một tập hợp các quy tắc để đảm bảo rằng các tin nhắn được hiểu chính xác.

Cách hoạt động:

- **Tin nhắn**: Trong XCM, tin nhắn giống như các chương trình nhỏ gồm các lệnh. Những lệnh này cho XCVM biết phải làm gì, như chuyển tài sản từ blockchain này sang blockchain khác.

- **Thực thi**: XCVM chạy các lệnh này lần lượt. Nếu mọi thứ diễn ra suôn sẻ, thì sẽ hoàn thành và kết thúc. Nếu có lỗi xảy ra, nó dừng lại và trả về lỗi để dễ dàng debug.

- **Tùy chỉnh**: Điều tuyệt vời về XCVM là nó được thiết kế để tùy chỉnh. Điều này có nghĩa là developers có thể điều chỉnh nó để phù hợp với nhu cầu cụ thể của blockchain.

＃ Quá trình "đi lên" của XCM 💪

Từ tháng 12 năm 2020 đến 2022, XCM đã được cập nhật và cải tiến nhiều lần để tăng tính linh hoạt, đa dạng hóa và tính hiệu quả của nó. Điều này cho thấy rằng Polkadot vẫn là một công nghệ tiên tiến, vẫn luôn được cập nhật liên tục.


👉 XCM V3

XCM V3 đã cải tiến giao thức giúp phân tách các ứng dụng qua các giao thức phân mảnh khác nhau, parachain và nhiều hơn nữa.

- Công cụ Phân tách Đa chuỗi
- Chuyển tài sản và NFT
- Phương thức gửi an toàn

Mục tiêu của XCM V3 là phân tách Relay Chain của Polkadot thành "các chuỗi hệ thống chức năng" — với các chức năng chính của Relay Chain là cung cấp bảo mật và tương tác.

Điểm chính là tạo ra một parachain chung cho mỗi chức năng (quản trị, giao dịch cọc, đấu giá, tài sản). Điều này là lợi thế cạnh tranh của kiến trúc Polkadot so với các hệ sinh thái khác.

(ảnh 4)

👉 XCM V4 (Coming soon)

Theo Gavin Wood, tại sự kiện Polkadot Decoded 2022, đã được ghi nhận rằng XCM phiên bản V4 đang trong quá trình phát triển và giải quyết các vấn đề như:

- Chi phí linh hoạt
- Điều hướng tin nhắn linh hoạt
- Checkpoints
- Hợp đồng thông minh
- ...

(ảnh 5)

＃ Kết luận

Tóm lại, các tiến bộ trong Cross-Chain Messaging (XCM) của Polkadot đã đáng kể nâng cao hệ sinh thái này. Việc ra mắt XCM V3 đã cải thiện đáng kể cả tính bảo mật lẫn khả năng tương tác của Relay Chain của Polkadot.

XCM là một yếu tố quan trọng cho phép tương tác phi tập trung giữa nhiều parachain, hỗ trợ giao tiếp chuỗi chéo, quản trị và chuyển đổi tài sản. Việc phát triển liên tục của XCM nhấn mạnh cam kết của cộng đồng Polkadot trong việc duy trì vị thế hàng đầu về tiến bộ công nghệ trong lĩnh vực tiền điện tử.

Tuy nhiên, trong khi việc chuyển tài sản và truyền tải tin nhắn trong XCM còn hạn chế và cần đến bên thứ ba, công cụ mới được gọi là SPREE, sẽ được khám phá các trong bài post tiếp theo.


## Reference

- [Polkadot Wiki - XCM](https://wiki.polkadot.network/docs/learn-xcm-index)
- [XCM v3 | Polkadot Deep dive](https://www.youtube.com/watch?v=MMIPNR3SuB4)
- [Gavin Wood, Polkadot founder: XCM v3 | Polkadot Decoded 2022](https://youtu.be/K2c6xrCoQOU?t=1920)


## Read more

- [How XCM v3 enhances Bifrost protocol](https://docs.bifrost.io/builders/liquid-staking-slp/xcm-v3-in-bifrost)
- [Moonbeam - Remote EVM calls through XCM](https://docs.moonbeam.network/builders/interoperability/xcm/remote-execution/remote-evm-calls/)
- [Phương Nguyễn - POLKADOT 2.0: TƯƠNG LAI CỦA CÁC ỨNG DỤNG PHI TẬP TRUNG](https://www.facebook.com/groups/1202788154012237/posts/1303786630579055/)



