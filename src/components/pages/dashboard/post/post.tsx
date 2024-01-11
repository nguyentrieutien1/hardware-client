"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AppModal } from "~/components/modal/modal";
import { useCategories, useGetProducts } from "~/queries";
import { toastConfig } from "~/lib";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "~/mutations";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import { toastErrorAuthen } from "~/lib/helpers";
import Tippy from "@tippyjs/react";
import Spinner from "~/components/spinner/spinner";
import "@progress/kendo-theme-default/dist/all.css";
export default function Post() {
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState<any>({
    name: "",
    stock: 1,
    price: null,
    description: "",
    id: null,
    categoriesId: null,
  });
  const { data: res, isLoading: isProductLoading } = useGetProducts();
  const products = res?.data;

  const { mutateAsync: createProduct, isLoading: isCreateLoading } =
    useCreateProductMutation();
  const { mutateAsync: updateProduct, isLoading: isUpdateLoading } =
    useUpdateProductMutation();
  const { mutateAsync: deleteProduct, isLoading: isDeleteLoading } =
    useDeleteProductMutation();
  const { data: categories } = useCategories();
  const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink,
    InsertImage,
  } = EditorTools;

  const setProductInit = () => {
    setProduct({ name: "", stock: 1, price: null, description: "", id: null });
  };
  const onChangeImages = (imageList) => {
    setImages(imageList);
  };
  useEffect(() => {
    const siblingElements: any = document.querySelector(".k-editor-content");

    // Lặp qua từng thẻ đứng liền kề và xóa background-image
    siblingElements.nextElementSibling.style.backgroundImage = "none";
  }, []);
  const onChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "price" || name === "stock") {
      if (value.length > 9) {
        toastConfig(
          `Vui lòng nhập đúng số ${name === "price" ? "tiền" : "lượng"}`
        );
        return;
      }
    }
    setProduct((prev) => {
      return {
        ...prev,
        [name]:
          name === "price" || name === "stock" || name === "categoriesId"
            ? +value
            : value,
      };
    });
  };
  const handleOnSubmit = () => {
    for (const key in product) {
      if (Object.prototype.hasOwnProperty.call(product, key)) {
        if (!product[key] && key !== "id") {
          toastConfig(`Các trường phải đảm bảo không được trống.`);
          return;
        }
      }
    }
    if (!isUpdate) {
      delete product.id;
      createProduct({
        ...product,
        images: images.map((image) => {
          return { url: image.data_url };
        }),
      })
        .then((res) => {
          setShow(false);
          setProductInit();
          toastConfig("Tạo bài viết thành công !", { status: "success" });
          setImages([]);
        })
        .catch((err) => {
          toastErrorAuthen(err, "Tạo bài viết");
        });
    } else {
      updateProduct({
        ...product,
        images: images.map((image) => {
          return { url: image.data_url };
        }),
      }).then(() => {
        setShow(false);
        setIsUpdate(false);
        setProductInit();
        toastConfig("Cập nhật bài viết thành công !", { status: "success" });
        setImages([]);
      });
    }
  };
  const handleDeleteProduct = () => {
    try {
      deleteProduct({ id: product.id }).then(() => {
        setProductInit();
        setShowDeleteModal(false);
        toastConfig("Xóa bài viết thành công !", { status: "success" });
      });
    } catch (error) {}
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const product = [...products].filter((product) =>
      product?.name?.toLowerCase()?.includes(value?.toLowerCase())
    );
    setProductList([...product]);
  };
  useEffect(() => {
    if (products) {
      setProductList([...products]);
    }
  }, [products?.length, products]);

  return (
    <>
      <div className="col-12">
        <div className="row content-wrapper">
          <div className="col-12 ">
            <div className="row mb-2 justify-content-between d-flex ">
              <div className="col-2 ">
                <div className="d-grid gap-2">
                  <button
                    onClick={() => setShow(true)}
                    type="button"
                    className="btn btn-success p-2"
                  >
                    + Thêm bài viết
                  </button>
                </div>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  aria-describedby="helpId"
                  placeholder="Tìm kiếm bài viết theo tên"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Danh sách bài viết</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Tiêu đề </th>
                        <th> Ảnh </th>
                        <th> Nội dung </th>
                        <th> Ngày tạo </th>
                        <th> Ngày cập nhật </th>
                        <th>Xóa/Cập nhật</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList?.map((product) => {
                        return (
                          <tr>
                            <td>
                              <img
                                src={
                                  product?.images?.length > 0 &&
                                  product?.images[0]?.url
                                }
                                className="me-1 rounded"
                                alt="image"
                              />
                            </td>
                            <td>{product?.name}</td>
                            <td className="w-25 cursor-pointer">
                              <Tippy
                                allowHTML={true}
                                content={<div>{product?.description}</div>}
                                arrow={true}
                                placement="right"
                              >
                                <div
                                  style={{
                                    width: "200px",
                                    whiteSpace: "break-spaces",
                                  }}
                                >
                                  {product?.description?.slice(0, 20)}...
                                </div>
                              </Tippy>
                            </td>
                            <td>{product?.stock} </td>
                            <td>{currencyFormatterConfig(product?.price)}</td>
                            <td>
                              <button
                                onClick={() => {
                                  setShowDeleteModal(true);
                                  setProduct({
                                    id: product?.id,
                                    description: "",
                                    name: "",
                                    price: null,
                                    stock: null,
                                  });
                                }}
                                type="button"
                                className="btn btn-danger btn-sm"
                              >
                                Xóa
                              </button>
                              <button
                                onClick={() => {
                                  setIsUpdate(true);
                                  setShow(true);
                                  setProduct({
                                    description: product?.description,
                                    name: product?.name,
                                    price: product?.price,
                                    stock: product?.stock,
                                    id: product?.id,
                                    categoriesId: product?.categoriesId,
                                  });
                                  setImages(
                                    product?.images.map((image) => {
                                      return {
                                        data_url: image.url,
                                      };
                                    })
                                  );
                                }}
                                type="button"
                                className="btn btn-success btn-sm m-lg-1"
                              >
                                Cập nhật
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <form className="forms-sample">
              <div className="row">
                <div className="form-group col-lg-6 col-sm-6">
                  <label htmlFor="exampleInputName1">Tiêu đề</label>
                  <input
                    onChange={onChangeProduct}
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Tiêu đề"
                    name="title"
                    value={product?.name}
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <div className="">
                    <label htmlFor="exampleTextarea1">Mô tả bài viết</label>
                    <Editor
                      tools={[
                        [Bold, Italic, Underline],
                        [Undo, Redo],
                        [InsertImage],
                      ]}
                      defaultContent={content}
                      contentStyle={{ height: 430, width: "100%" }}
                    />
                  </div>
                </div>

                {/* <div className="col-lg-6 col-sm-12">
                  <label className="mb-2" htmlFor="">
                    Hình ảnh
                  </label>
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChangeImages}
                    maxNumber={69}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <button
                          className="btn btn-success btn-sm"
                          type="button"
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={(e) => {
                            e.preventDefault();
                            onImageUpload();
                          }}
                          {...dragProps}
                        >
                          Nhấn chọn hoặc kéo thả tại đây
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            onImageRemoveAll();
                          }}
                        >
                          Xóa tất cả cá ảnh
                        </button>
                        <div className="my-2 d-flex align-items-center row">
                          {imageList.map((image, index) => (
                            <div
                              key={index}
                              className=" image-item d-flex flex-column align-items-center justify-content-between col-3 flex-md-wrap"
                            >
                              <img
                                src={image["data_url"]}
                                width="100"
                                className="rounded"
                                height="100"
                                style={{ objectFit: "cover" }}
                              />
                              <div className="image-item__btn-wrapper my-2 d-flex align-content-center">
                                <button
                                  className="btn btn-sm btn-success mx-1"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onImageUpdate(index);
                                  }}
                                >
                                  Đổi
                                </button>
                                <button
                                  className="btn btn-sm btn-warning"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onImageRemove(index);
                                  }}
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <AppModal
          title="Xóa bài viết"
          content={<p>Bạn có muốn xóa bài viết này không ?</p>}
          closeModal={() => setShowDeleteModal(false)}
          modalIsOpen={showDeleteModal}
          onConfirm={() => handleDeleteProduct()}
        />
      )}
      <Spinner
        isLoading={
          isDeleteLoading ||
          isCreateLoading ||
          isUpdateLoading ||
          isProductLoading
        }
      />
    </>
  );
}
