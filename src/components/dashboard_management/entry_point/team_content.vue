<template>
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <i class="fa-solid fa-plus"></i>
            <p class="card-text">ADD NEW PROJECT</p>
          </div>
        </div>
      </div>
      <!-- Tambahkan kartu-kartu lain di sini -->
    </div>
</template>
  
<style scoped>
.card {
  border: 2px dotted gray;
  background-color: transparent;
  min-height: 0;
  padding: 35px 0;
  color: #fff;
  cursor: pointer;
}

.card-body {
  text-align: center;
  padding: 20px;
}

.card-text {
  font-weight: bold;
  margin-top: 10px;
}
</style>