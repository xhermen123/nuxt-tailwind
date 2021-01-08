<template>
  <div class="">
    <img class="absolute top-0 left-0 -z-1" src="/bg.svg"/>
    <Header />
    <div class="max-w-screen-xl m-auto">
      <div class="flex py-20 px-10">
        <div class="flex-1 mr-8">
          <img src="/man.svg"/>
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <p class="text-gray-900 text-6xl leading-tight font-medium">Work Smart,</p>
          <p class="text-gray-900 text-6xl leading-tight font-medium">Not Hard.</p>
          <p class="text-gray-700 text-xl mt-4">
            When your team needs to kick off a project, hire a new employee, 
            deploy some code, review a sales contract, finalize next year's 
            budget, measure an A/B test, plan your next office opening, 
            and more, Slack has you covered.
          </p>
        </div>
      </div>
      <div class="pt-16 px-10">
        <p class="text-gray-900 text-3xl text-center font-medium">The hub for your team and your work</p>
        <p class="text-gray-700 text-xl mt-4 text-center max-w-4xl m-auto">
          Slack is a place where your team comes together to collaborate, 
          important information can be found by the right people, and your 
          tools pipe in information when and where you need it.
        </p>
      </div>
      <div class="py-16 px-10">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center">
            <img src="/image2.svg"/>
            <div>
              <p class="text-2xl text-gray-900">Rapid Transport</p>
              <p class="text-gray-700">
                Integrate the <span class="text-green-400">latest technologies</span> with an innovative platform 
                that’s always getting better and launching new features weekly.
                We fit your needs as you grow.
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <img src="/image1.svg"/>
            <div>
              <p class="text-2xl text-gray-900">Rapid Transport</p>
              <p class="text-gray-700">
                Integrate the <span class="text-green-400">latest technologies</span> with an innovative platform 
                that’s always getting better and launching new features weekly.
                We fit your needs as you grow.
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <img src="/image2.svg"/>
            <div>
              <p class="text-2xl text-gray-900">Rapid Transport</p>
              <p class="text-gray-700">
                Integrate the <span class="text-green-400">latest technologies</span> with an innovative platform 
                that’s always getting better and launching new features weekly.
                We fit your needs as you grow.
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <img src="/image2.svg"/>
            <div>
              <p class="text-2xl text-gray-900">Rapid Transport</p>
              <p class="text-gray-700">
                Integrate the <span class="text-green-400">latest technologies</span> with an innovative platform 
                that’s always getting better and launching new features weekly.
                We fit your needs as you grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
