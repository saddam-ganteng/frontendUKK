<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-header py-4">
              <div>
                <h3 class="card-label font-weight-bolder text-dark">Profile</h3>
                <span class="text-muted">Informasi Data Diri</span>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">ID Petugas</label>
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control form-control-lg form-control-solid"
                      placeholder="Nama"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Nama</label>
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control form-control-lg form-control-solid"
                      placeholder="Nama"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Username</label>
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control form-control-lg form-control-solid"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Telp</label>
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control form-control-lg form-control-solid"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Level</label>
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control form-control-lg form-control-solid"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer py-4">
              <button type="submit" class="btn btn-danger ml-3 float-right">
                Download PDF
              </button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card rounded-xl shadow card-custom gutter-b">
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
                  Laporan
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Laporan/List">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Laporan
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
