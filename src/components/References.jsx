import React from 'react'
import { motion } from 'framer-motion'
import { Bookmark } from 'lucide-react'

const referencesList = [
  "Cooper, L., Zarske, M., & Carlson, D. (2021). Teach Engineering: Summary. Teach Engineering. Retrieved April 1, 2026, from https://www.teachengineering.org/activities/view/cub_creative_activity1.",
  "Statman, M.R., Eisenstein, E.N., Brown, M. et al. Outcomes from a STEM Education Program for Elementary School Students in Medically Underserved Areas and Populations. J Canc Educ (2026). https://doi.org/10.1007/s13187-025-02825-6",
  "Science teachers sacrifice to provide lab materials for students. (2018, May 12). PBS NewsHour. https://www.pbs.org/newshour/education/science-teachers-sacrifice-to-provide-lab-materials-for-students",
  "Struyf, A., De Loof, H., Boeve-de Pauw, J., & Van Petegem, P. (2019). Students’ engagement in different STEM learning environments: integrated STEM education as promising practice? International Journal of Science Education, 41(10), 1387–1407. https://doi.org/10.1080/09500693.2019.1607983",
  "Technovation. (2019, July 29). The Brachistochrone Curve [Video]. YouTube. https://www.youtube.com/watch?v=1BdO8J0iynY.",
  "Tytler, R. (2020). STEM Education for the Twenty-First Century. In: Anderson, J., Li, Y. (eds) Integrated Approaches to STEM Education. Advances in STEM Education. Springer, Cham. https://doi.org/10.1007/978-3-030-52229-2_3"
]

export default function References() {
  return (
    <section id="references" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ncsu-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block flex items-center gap-2">
              <Bookmark size={12} className="text-ncsu-red" />
              Citations & Research
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-ncsu-black leading-tight tracking-tighter mb-8 font-serif">
              References
            </h2>
            <div className="h-1 w-24 bg-ncsu-red rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {referencesList.map((ref, i) => (
              <div
                key={i}
                className="group relative pl-8 border-l-2 border-slate-100 hover:border-ncsu-red transition-colors duration-500"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-ncsu-red transition-colors duration-500" />
                <p className="text-slate-600 font-serif leading-[2.5] text-lg hover:text-ncsu-black transition-colors duration-300">
                  {ref}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
