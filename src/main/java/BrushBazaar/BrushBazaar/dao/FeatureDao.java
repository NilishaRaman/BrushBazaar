package BrushBazaar.BrushBazaar.dao;

import BrushBazaar.BrushBazaar.entities.Feature;
import BrushBazaar.BrushBazaar.Repository.FeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class FeatureDao {

    @Autowired
    private FeatureRepository featureRepository;

    public List<Feature> getAllFeatures() {
        return featureRepository.findAll();
    }

    public Optional<Feature> getFeatureById(Long id) {
        return featureRepository.findById(id);
    }

    public Feature saveFeature(Feature feature) {
        return featureRepository.save(feature);
    }

    public void deleteFeature(Long id) {
        featureRepository.deleteById(id);
    }
}
