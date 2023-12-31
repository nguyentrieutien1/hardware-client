"use client";
import React from "react";
import Link from "next/link";
import { LINK } from "~/lib/constants/routes";
import { useGetProducts } from "~/queries/index";
export default function HomePage() {
  const { data: products } = useGetProducts();

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  FASTFIX TN:
                  <span className="d-block">
                    Nơi giải quyết vấn đề phần cứng
                  </span>
                </h1>
                <p className="mb-4">
                FASTFIX: Đối tác tin cậy cho mua sắm và sửa chữa phần cứng
                  chất lượng cao.
                </p>
                <p>
                  <Link href={LINK.SHOP} className="btn btn-secondary me-2" prefetch>
                   Mua ngay
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/Hardware.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Chế tác với chất liệu tuyệt vời
              </h2>
              <p className="mb-4">
                Chúng tôi tìm kiếm và lựa chọn các vật liệu xuất sắc để đảm bảo
                rằng sản phẩm của chúng tôi có độ bền cao và đáng tin cậy. Chúng
                tôi chỉ sử dụng các chất liệu chất lượng cao, đảm bảo rằng sản
                phẩm của chúng tôi không chỉ đẹp mắt mà còn có khả năng chịu
                được sự sử dụng hàng ngày.
              </p>
              <p>
                <Link href={LINK.SHOP} className="btn" prefetch>
                  Explore
                </Link>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            {/* {products?.data?.map((product: IProduct, index: number) => (
              <Product key={index} product={product} />
            ))} */}

            {/* End Column 4 */}
          </div>
        </div>
      </div>
      {/* End Product Section */}
      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Bạn nên chọn chúng tôi bởi vì ?</h2>
              <p>
                TechFix là một địa chỉ đáng tin cậy cho các dịch vụ mua bán và
                sửa chữa phần cứng. Với kinh nghiệm lâu năm và đội ngũ kỹ thuật
                viên chuyên nghiệp, chúng tôi cam kết mang đến cho khách hàng
                những giải pháp phần cứng tốt nhất.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/truck.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Nhanh &amp; Miễn phí vận chuyển</h3>
                    <p>
                      Chúng tôi hiểu rằng thời gian là quan trọng và bạn mong
                      muốn nhận được sản phẩm nhanh chóng. Vì vậy, chúng tôi
                      cung cấp dịch vụ giao hàng nhanh và miễn phí cho khách
                      hàng của chúng tôi.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/bag.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Dễ dàng mua sắm</h3>
                    <p>
                      Trang web của chúng tôi được thiết kế đơn giản và dễ sử
                      dụng, giúp bạn dễ dàng tìm kiếm và chọn lựa các sản phẩm
                      phần cứng mà bạn cần. Chúng tôi cung cấp mô tả chi tiết và
                      hình ảnh sản phẩm để bạn có thể hiểu rõ hơn về chúng trước
                      khi quyết định mua.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/support.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Hỗ trợ 24/7 </h3>
                    <p>
                      Chúng tôi hiểu rằng sự hỗ trợ liên tục là rất quan trọng
                      khi gặp vấn đề với sản phẩm phần cứng. Vì vậy, chúng tôi
                      cung cấp dịch vụ hỗ trợ 24/7 để đáp ứng mọi nhu cầu của
                      khách hàng.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/return.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Trả lại miễn phí các vấn đề</h3>
                    <p>
                      Chúng tôi hiểu rằng có thể có những trường hợp bạn cần trả
                      lại sản phẩm vì nhiều lý do khác nhau. Vì vậy, chúng tôi
                      cam kết cung cấp quy trình trả hàng dễ dàng và không gây
                      phiền toái cho khách hàng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="https://img.etimg.com/thumb/width-640,height-480,imgsize-72454,resizemode-75,msid-104448970/tech/technology/it-hardware-firms-with-build-plans-may-get-extra-year-of-curb-free-imports/it-hardware-deadline.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}
      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img
                    src="https://img.freepik.com/premium-photo/man-is-assembling-components-build-computer-he-is-putting-cpu-socket-motherboardcreated-with-generative-ai-technology_132358-8489.jpg"
                    alt="Untree.co"
                  />
                </div>
                <div className="grid grid-2">
                  <img
                    src="https://previews.123rf.com/images/scofano/scofano2305/scofano230501906/204341692-representaci%C3%B3n-3d-del-concepto-de-hardware-de-inteligencia-artificial-circuito-cerebral-azul.jpg"
                    alt="Untree.co"
                  />
                </div>
                <div className="grid grid-3">
                  <img
                    src="https://png.pngtree.com/thumb_back/fw800/background/20230630/pngtree-3d-render-of-a-computer-with-a-question-mark-image_3700309.jpg"
                    alt="Untree.co"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                Điểm đến của bạn cho các giải pháp thiết kế nội thất hiện đại và
                dịch vụ phần cứng chuyên nghiệp.
              </h2>
              <p>
                Cung cấp giải pháp thiết kế nội thất hiện đại và dịch vụ phần
                cứng chuyên nghiệp. Với chúng tôi, việc tạo ra không gian sống
                đẹp và tiện nghi trở nên dễ dàng. Chúng tôi cam kết mang đến cho
                bạn trải nghiệm tuyệt vời và chất lượng cao. Hãy để chúng tôi
                giúp bạn biến ý tưởng thành hiện thực.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Bài viết gần đây</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <a href="#" className="more">
                Hiển thị tất cả
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/03/24/19/23/1000_F_324192340_jeRwwjYDERsD4NLbxH1psrSWucg85xFf.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="https://www.cgdirector.com/wp-content/uploads/media/2020/05/MSI-MEG-X570-Unify-Hero.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-the-computer-hardware-is-illuminated-with-electricity-image_2662792.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Section */}
      {/* Start Footer Section */}

      {/* End Footer Section */}
    </>
  );
}
