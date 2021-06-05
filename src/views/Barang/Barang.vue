<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  Kirim Barang
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Barang/Kirim">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Kirim
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card card-custom gutter-b">
            asd
          </div>
        </div>
        <div class="col-4">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  Adjusment Barang
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Barang/Adjusment">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Adjusment
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
